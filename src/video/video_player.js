
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import ReactPlayer from "react-player"

const useStyles = makeStyles({
  playerWrapper: {
    position: "relative",
    width: '50%'
    // paddingTop: "56.25%",
  },

  reactPlayer: {
    position: "absolute",
    top: "5%",
    left: "0",
  },
})

export  function VideoPlayer({url}) {
  const classes = useStyles()
  return (
    <div className={classes.playerWrapper}>
      <ReactPlayer
        url={url}
        className={classes.reactPlayer}
        playing={true}
        width="100%"
        height="100%"
        controls={true}
      />
    </div>
  )
}