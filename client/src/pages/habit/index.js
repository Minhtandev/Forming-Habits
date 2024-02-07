import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Drawer, Button,  } from 'antd';
import Title from './components/title';
import Form from './components/form';
import Detail from './components/detail';
import { MODES } from '../../constants';

const Habit = props => {
  const [mode, setMode] = useState(MODES.VIEW);
  const [isOpen, setIsOpen] = useState(false);
  const [habitDetail, setHabitDetail] = useState(null);

  const handleOpenDrawer = (mode = MODES.VIEW, habitDetail) => {
    setIsOpen(true);
    setMode(mode);
    setHabitDetail(habitDetail);
  }

  const handleCloseDrawer = () => {
    setIsOpen(false);
  }

  return (
    <>
      <div>Habit</div>
      <Button onClick={() => handleOpenDrawer()}>Detail</Button>
      <Button onClick={() => handleOpenDrawer(MODES.ADD)}>Form</Button>
      <Drawer
        title={"title"}
        width={800}
        destroyOnClose
        open={isOpen}
        onClose={handleCloseDrawer}
        bodyStyle={{ padding: 16 }}
      >
        {
          mode === MODES.VIEW ? <Detail /> : <Form />
        }
      </Drawer>
    </>
  )
}

Habit.propTypes = {}

export default Habit