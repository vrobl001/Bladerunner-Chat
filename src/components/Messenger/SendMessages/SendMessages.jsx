import React, { useState } from 'react';
import messageService from '../../../utils/messageService';
import styles from './SendMessages.module.css';

export default function SendMessages(props) {
  const [form, setState] = useState({
    name: props.user.name,
    chatTopic: props.chatTopic,
    msg: '',
  });

  const handleChange = (e) => {
    setState({
      ...form,
      chatTopic: props.chatTopic,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!isMessageValid()) return;
      try {
        const { name, chatTopic, msg } = form;
        await messageService.sendMessages({ name, chatTopic, msg });
        setState({
          ...form,
          msg: '',
        });
      } catch (error) {
        setState({
          ...form,
          msg: '',
        });
      }
    }
  };

  const isMessageValid = () => {
    return form.name && form.msg;
  };

  return (
    <div className={styles.sendMessageContainer}>
      <form className={styles.formContainer}>
        <textarea
          onKeyPress={handleSubmit}
          className={styles.textArea}
          id='msg'
          name='msg'
          type='text'
          value={form.msg}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
