import React, { useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

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

          <Box component="form" noValidate autoComplete="off" className="contact-form">
            <div className="form-flex">
              <TextField
                required
                id="contact-name"
                label="Your Name"
                placeholder="What's your name?"
                value={form.name}
                onChange={handleChange('name')}
                error={errors.name}
                helperText={errors.name ? 'Please enter your name' : ''}
              />
              <TextField
                required
                id="contact-email"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={form.email}
                onChange={handleChange('email')}
                error={errors.email}
                helperText={errors.email ? 'Please enter your email or phone number' : ''}
              />
            </div>

            <TextField
              required
              id="contact-message"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={form.message}
              onChange={handleChange('message')}
              error={errors.message}
              helperText={errors.message ? 'Please enter the message' : ''}
            />

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
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;