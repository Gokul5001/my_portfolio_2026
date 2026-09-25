import React, { useState } from 'react';
import '../assets/styles/Contact.scss';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import SendIcon from '@mui/icons-material/Send';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name: boolean;
  email: boolean;
  message: boolean;
}

const initialForm: FormState = { name: '', email: '', message: '' };
const initialErrors: FormErrors = { name: false, email: false, message: false };

function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>(initialErrors);
  const [sending, setSending] = useState<boolean>(false);
  const [status, setStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {
      name: form.name.trim() === '',
      email: form.email.trim() === '',
      message: form.message.trim() === '',
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const sendEmail = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setSending(true);
    setStatus(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error('Request failed');

      setStatus('success');
      setForm(initialForm);
      setErrors(initialErrors);
    } catch (error) {
      console.error('Send error:', error);
      setStatus('error');
    } finally {
      setSending(false);
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>

          <form noValidate autoComplete="off" className="contact-form">
            <div className="form-flex">
              <div className="field-group">
                <label htmlFor="contact-name">
                  Your Name<span className="required">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="What's your name?"
                  value={form.name}
                  onChange={handleChange('name')}
                  className={errors.name ? 'has-error' : ''}
                />
                {errors.name && <span className="error-text">Please enter your name</span>}
              </div>

              <div className="field-group">
                <label htmlFor="contact-email">
                  Email / Phone<span className="required">*</span>
                </label>
                <input
                  id="contact-email"
                  type="text"
                  placeholder="How can I reach you?"
                  value={form.email}
                  onChange={handleChange('email')}
                  className={errors.email ? 'has-error' : ''}
                />
                {errors.email && (
                  <span className="error-text">Please enter your email or phone number</span>
                )}
              </div>
            </div>

            <div className="field-group body-form">
              <label htmlFor="contact-message">
                Message<span className="required">*</span>
              </label>
              <textarea
                id="contact-message"
                placeholder="Send me any inquiries or questions"
                rows={10}
                value={form.message}
                onChange={handleChange('message')}
                className={errors.message ? 'has-error' : ''}
              />
              {errors.message && <span className="error-text">Please enter the message</span>}
            </div>

            <div className="form-footer">
              {status === 'success' && (
                <Alert severity="success">Thanks! Your message was sent.</Alert>
              )}
              {status === 'error' && (
                <Alert severity="error">Something went wrong. Please try again later.</Alert>
              )}

              <Button
                variant="contained"
                endIcon={<SendIcon />}
                onClick={sendEmail}
                disabled={sending}
              >
                {sending ? 'Sending...' : 'Send'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;