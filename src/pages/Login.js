import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../components/Form';
import Input from '../components/Input';
import Button from '../components/Button';
import { useAuth } from '../hooks/useAuth';
import { loginUser } from '../service/authService';

function Login() {


    return (
        <div>
            <h2>Login</h2>

        </div>
    );
}

export default Login;
