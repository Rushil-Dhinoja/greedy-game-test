import React from "react";
import { Button, Icon } from "rsuite";

const Settings = (props) => {
  const { isFieldsVisible, setIsFieldsVisible } = props;

  const onClick = () => {
    setIsFieldsVisible(!isFieldsVisible);
  };
  return (
    <div>
      <Button appearance="ghost" onClick={onClick}>
        <Icon icon="gear" /> Settings
      </Button>
    </div>
  );
};

export default Settings;
