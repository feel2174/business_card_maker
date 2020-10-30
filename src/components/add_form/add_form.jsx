import React, { useRef } from "react";
import styles from "./add_form.module.css";

import Button from "components/button/button";
import { useState } from "react";

const AddForm = ({  FileInput, onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const [file, setFile] = useState({
    fileName: null,
    fileURL: null
  });

  const onFileChange = (file) => {
    console.log(file);
    setFile({
      fileName: file.name,
      fileURL: file.url
    })
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || "",
      company: companyRef.current.value || "",
      theme: themeRef.current.value,
      title: titleRef.current.value || "",
      email: emailRef.current.value || "",
      message: messageRef.current.value || "",
      fileName: file.fileName || '',
      fileURL: file.fileURL || '',
    };
    formRef.current.reset();
    setFile({
      fileName: null,
      fileURL: null
    })
    onAdd(card);
  };

  return (
    <form className={styles.form} ref={formRef}>
      <input
        ref={nameRef}
        className={styles.input}
        type="text"
        name="name"
        placeholder="Name"
      />
      <input
        ref={companyRef}
        className={styles.input}
        type="text"
        name="company"
        placeholder="Company"
      />
      <select
        ref={themeRef}
        className={styles.select}
        name="theme"
        value="default"
      >
        <option>light</option>
        <option>dark</option>
        <option>colorful</option>
      </select>
      <input
        ref={titleRef}
        className={styles.input}
        type="text"
        name="title"
        placeholder="Title"
      />
      <input
        ref={emailRef}
        className={styles.input}
        type="text"
        name="email"
        placeholder="Email"
      />
      <textarea
        ref={messageRef}
        className={styles.textarea}
        name="message"
      ></textarea>
      <div className={styles.fileInput}>
       <FileInput onFileChange={onFileChange}/>
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
};

export default AddForm;
