import React from 'react';

export default function ChoiceHeader({option}) {
    return (
        <h3>
            <span>{option}</span>{" "}
            <small>
              Option for <br />
              King Shan
            </small>{" "}
          </h3>
    )
}
