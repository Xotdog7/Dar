import React, { ChangeEvent, FC, useState } from "react";
import { Actor } from "../../types";

type Props = {
  actor: Actor;
};

const ActorItem: FC<Props> = ({ actor }) => {
  const [review, setReview] = useState("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setReview(event.currentTarget.value);
  };
  return (
    <div className="movie-item" style={{ marginBottom: "1rem" }}>
      <div>{actor.name}</div>
      <div>{actor.dateOfBirth}</div>
      <div>{actor.film} </div>
      <h3>Обзор</h3>
      <div>{review}</div>
      <input
        type="text"
        placeholder="Обзор"
        name="review"
        value={review}
        onChange={onChange}
      />
    </div>
  );
};

export default ActorItem;
