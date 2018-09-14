import React from 'react';

import './static/css/minicard.css';

import { DragSource, DropTarget } from 'react-dnd';
import { findDOMNode } from 'react-dom';
import flow from 'lodash/flow'

const cardSource = {
  beginDrag(props) {
    console.log(props.song);
    console.log(props.song.id + " "+props.index);
    if(props.name === 'queue')
    {
      return {
      id: props.song.id,
      index: props.index,
      }
    }

    return ;
  }
}

const cardTarget = {
  hover(props, monitor, component) {
    if (!component) {
      return null
    }
    const dragIndex = monitor.getItem().index
    const hoverIndex = props.index

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return
    }

    const hoverBoundingRect = (findDOMNode(
      component,
    )).getBoundingClientRect()

    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

    const clientOffset = monitor.getClientOffset()

    const hoverClientY = (clientOffset).y - hoverBoundingRect.top

    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return
    }

    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return
    }

    props.moveCard(dragIndex, hoverIndex)

    monitor.getItem().index = hoverIndex
  },
}


class MiniCard extends React.Component {
  play() {
    this.props.playSong(this.props.song);
  }

  addToNowPlaying() {
    this.props.addToNowPlaying(this.props.song);
  }

  removeSong() {
    this.props.removeSong(this.props.song);
  }

  render() {
    const {isDragging, connectDragSource,connectDropTarget,} = this.props;

    const opacity  = isDragging ? 0.5 : 1;

    const MAX_TITLE_LENGTH = 24;

    let videoTitle = this.props.song.title;

    if(videoTitle.length > MAX_TITLE_LENGTH) {
      videoTitle =  videoTitle.substring(0, MAX_TITLE_LENGTH)+'... ';
    }

    console.log(this.props.name);

    return (
      connectDragSource &&
      connectDropTarget &&
      connectDragSource(
        connectDropTarget(
              <div className='song-card-list uk-margin-small-bottom uk-flex' style={{opacity}}>
        <div className="uk-flex"  onClick={this.play.bind(this)}>
          <img src={this.props.song.thumb} className='uk-border-circle song-card-list-thumb'
               alt='IMG'/>
          <div className='song-card-list-details col-xs-11 col-sm-11 col-md-10 col-lg-8'>
            <div className='song-card-list-title text-color-grey87'>
              {this.props.active ? <b>{videoTitle}</b> : <div>{videoTitle}</div>}
            </div>
            <div className='song-card-list-channel font-size-11'>
              {this.props.active ? <b>{this.props.song.uploader}</b> : <div>{this.props.song.uploader}</div>}
            </div>
          </div>
        </div>
        <div className="add-to-upnext">
          {this.props.name === 'related'?<button name='plus' onClick={this.addToNowPlaying.bind(this)} className="uk-icon-link uk-icon" uk-icon="icon:plus;"/>:
            <button name='plus' className="uk-icon-link uk-icon" uk-icon="icon:close;" onClick={this.removeSong.bind(this)} />}
        </div>
      </div>
          ),
      )
    )
  }
}

export default flow(DragSource('card',
  cardSource,
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  }),),DropTarget('card', cardTarget, (connect) => ({
  connectDropTarget: connect.dropTarget(),
})
  ))(MiniCard);