const SkillTagBox = React.createClass({
  getInitialState: function() {
    return { user: { id: '', name: '', added_skill_tags: [] } }
  },

  componentDidMount: function() {
    $.ajax({
      url: `/api/v1${location.pathname}`,
      dataType: 'json',
      success: function(result) {
        this.setState({user: result})
      }.bind(this),
      error: function(xhr, status, err) {
      }.bind(this)
    })
  },
   
  render: function() {
    return (
      <div className='skillTagBox'>
        <h2>AddedSkillTags</h2>
        <SkillAddButton />
        <AddedSkillTagList 
          addedSkillTags={this.state.user.added_skill_tags}
        />
      </div>
    );
  }
});

const AddedSkillTagList = React.createClass({
  render: function() {
    return (
      <div className='addedSkillTagList'>
        <ul>
          {this.props.addedSkillTags.map((addedSkillTag, index) => {
            return (<AddedSkillTag
              key={addedSkillTag.id}
              addedSkillTag={addedSkillTag}
            />)
          })}
        </ul>
      </div>
    )
  }
});

const AddedSkillTag = React.createClass({
  render: function() {
    const { addedSkillTag } = this.props
    return <li key={addedSkillTag.id}>{addedSkillTag.count} {addedSkillTag.name}</li>;
  }
});

const SkillAddButton = React.createClass({
  render: function() {
    return (
      <form className='skillForm'>
        <input type='text' placeholder='your new skill' />
        <input type='submit' value='Add' />
      </form>
    )
  }
})
