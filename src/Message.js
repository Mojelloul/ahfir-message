import { Typography,Card,CardContent} from '@material-ui/core';
import React,{forwardRef} from 'react'
import './Message.css'

const Message = forwardRef(({message,username},ref) => {
    const isUser = message.username === username;
    return (    
            <div ref={ref} className={`message ${isUser && 'message__user'}`}>
                <Card className={isUser ? "muser" : "notuser"}>
                    <CardContent>
                        <Typography  variant="h5" component="h2">
                            <p>{!isUser && `${message.username || 'inconu'}: `} {message.message} </p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
    )
})

export default Message
