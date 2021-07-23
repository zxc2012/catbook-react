import React, { Component } from "react";
import { get } from "../../utilities";
// TODO (step6): import SingleStory
// TODO (step7): import SingleComment
// TODO (step8): import NewComment
// TODO (step9): import CommentsBlock

import "./Card.css";
import SingleComment from "./SingleComment";
import SingleStory from "./SingleStory";

/**
 * Card is a component for displaying content like stories
 *
 * Proptypes
 * @param {string} _id of the story
 * @param {string} creator_name
 * @param {string} content of the story
 */
class Card extends Component {
  constructor(props) {
    super(props);
    this.state={
      comments:[],
    }
    // TODO (step6): define state to hold comments (refer to Feed)
  }

  componentDidMount() {
    // TODO (step6): implement a GET call to retrieve comments,
    // and assign it to state
    get("/api/comment",{parent:this.props._id}).then(
      (getComments)=>{
        this.setState({
          comments:getComments,
        });
        console.log(getComments);
      }
    )
  }

  render() {
    // TODO (step6): render a SingleStory using props,
    // and render the comments from state (with JSON.stringify)
    // from state using a map (refer to Feed)
    let getComments=this.state.comments;
    let commentList=null;
    if(getComments.length>0){
      commentList=
      <SingleComment creator_name={getComments[0].creator_name} content={getComments[0].content}/>;
    }
    else commentList=<div>No comments!</div>

    return (
      <div>
        <SingleStory creator_name={this.props.creator_name} content={this.props.content}/>
        {commentList}
        
      </div>
    );
    // return this.state.comments.map((getcomment)=>
    // <div creator_name={getcomment.creator_name} content={getcomment.content}/>
    // )
    // TODO (step7): map comments from state into SingleComment
    // components (refer to Feed)
    // TODO (step8): add in the NewComment component (refer to Feed)
    // TODO (step9): use CommentsBlock
  }
}

export default Card;
