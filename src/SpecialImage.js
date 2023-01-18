import React from "react";
import { OverlayTrigger, Popover, Image } from "react-bootstrap";

export default function SpecialImage({ store }) {
  return (
    <OverlayTrigger
      trigger="click"
      placement="top"
      overlay={
        <Popover>
          <Popover.Header as="h3">{store.name}</Popover.Header>
          <Popover.Body>{store.description}</Popover.Body>
        </Popover>
      }
    >
      <Image src={store.image} thumbnail />
    </OverlayTrigger>
  );
}
