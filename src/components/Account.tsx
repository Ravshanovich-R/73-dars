import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { useState } from 'react';
import VerifyOTPForm from './VerifyOTPForm';

const Account = () => {
    const [isRegister, setRegister] = useState(false);

    return (
        <Dialog>
            <DialogTrigger>Kirish</DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Account</DialogTitle>
                    <DialogDescription>
                        Sign in to your account to continue.
                    </DialogDescription>
                </DialogHeader>

                {isRegister ? (
                    <VerifyOTPForm setRegister={setRegister} />
                ) : (
                    <Tabs defaultValue="register">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="register">Register</TabsTrigger>
                            <TabsTrigger value="login">Login</TabsTrigger>
                        </TabsList>
                        <TabsContent value="register">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Register</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <RegisterForm setRegister={setRegister} />
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="login">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Login</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <LoginForm />
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default Account;
