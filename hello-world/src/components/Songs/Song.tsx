import { SongProps } from "./SongType";

const Song = (props:SongProps):JSX.Element=>{
    const voteNow = () : void => props.recordVote();

    return (<li>{props.song.title} by {props.song.artist} has {props.song.votes} <button onClick={voteNow}>Vote for this song</button></li>);
}

export default Song;
