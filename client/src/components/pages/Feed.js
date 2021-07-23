import React, { Component } from "react";
import { get } from "../../utilities";
import { NewStory } from "../modules/NewPostInput";
import { NewComment } from "../modules/NewPostInput";
import SingleStory from "../modules/SingleStory";
import Card from "../modules/Card.js";
// TODO (step4): import NewStory
// TODO (step6): remove SingleStory import, import Card

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state={
      stories:[],
    }
  }

  componentDidMount() {
    get("/api/stories").then((getStories)=>{
      this.setState({
        stories:getStories,
      })
    })
  }

  render() {
    let getStories=this.state.stories;
    let storyList=null;
    let commentList=null;
    if(getStories.length>0){
      storyList=
      <Card _id={getStories[0]._id} creator_name={getStories[0].creator_name} content={getStories[0].content}/>;
      commentList=<NewComment _id={getStories[0]._id}/>
    }
    else {
      storyList=<div>No stories!</div>
      commentList=<div>No comments!</div>
    }

    //return <div>This is the feed!</div>;
    // return (
    // <div>
    //     {storyList}
    // </div>
    // )
    return (
      <div>
        <NewStory />
        {storyList}
        {commentList}
      </div>
    )
    // TODO (step6): use Card instead of SingleStory
  }
}

export default Feed;
