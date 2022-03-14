import React, { FC } from "react";
import { Actor } from "../../types";
import ActorItem from "../actorItem/ActorItem";
type Props = {
  actors: Actor[];
};
const ActorList: FC<Props> = ({ actors }) => {
  return (
    <div>
      {actors.map((actor) => (
        <ActorItem key={actor.id} actor={actor} />
      ))}
    </div>
  );
};

export default ActorList;
