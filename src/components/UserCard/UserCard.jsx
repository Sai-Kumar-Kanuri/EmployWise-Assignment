import React, { useState } from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const UserCard = ({ user, avatar, firstName, lastName, email, onEdit, onDelete }) => {
    const [open, setOpen] = useState(false);

    return (
        <Card className="w-full md:w-80 p-4 shadow-lg rounded-lg flex flex-col items-center">
            <CardHeader className="flex justify-center">
                <Avatar className="w-20 h-20 border-2 border-gray-300 shadow-md">
                    <AvatarImage src={avatar} alt={`${firstName} ${lastName}`} />
                    <AvatarFallback>{firstName[0]}{lastName[0]}</AvatarFallback>
                </Avatar>
            </CardHeader>
            <CardContent className="text-center">
                <CardTitle className="text-xl font-bold">{`${firstName} ${lastName}`}</CardTitle>
                <p className="text-gray-600 text-sm mb-4">{email}</p>
                
            </CardContent>
            <div className="flex gap-4">
                <div>

                    <Dialog open={open} onOpenChange={setOpen}>
                        <DialogTrigger asChild>
                            <Button variant="secondary" className="flex items-center gap-2">
                                <Edit className="w-4 h-4" /> Edit
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Edit User</DialogTitle>
                                <DialogDescription>Update user details below.</DialogDescription>
                            </DialogHeader>
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    onEdit(user.id, {
                                        first_name: e.target.firstName.value,
                                        last_name: e.target.lastName.value,
                                        email: e.target.email.value,
                                    });
                                    setOpen(false);
                                }}
                            >
                                <div className="space-y-4 py-2">
                                    <Input name="firstName" defaultValue={firstName} label="First Name" />
                                    <Input name="lastName" defaultValue={lastName} label="Last Name" />
                                    <Input name="email" defaultValue={email} label="Email" type="email" />
                                </div>
                                <DialogFooter>
                                    <Button type="submit">Save Changes</Button>
                                </DialogFooter>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>

                <div>
                    <Button variant="destructive" className="flex items-center gap-2" onClick={() => onDelete(user.id)}>
                        Delete
                    </Button>
                </div>

            </div>
        </Card>
    );
};

export default UserCard;
