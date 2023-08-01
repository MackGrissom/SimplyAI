import {Avatar, AvatarImage} from '@/components/ui/avatar'
import Brain3 from './animation/brain3'
export const BotAvatar = () => {
    return (
    <Avatar className='w-11 h-11 bg-transparent bg-sky rounded-full mt-2'>
        <AvatarImage className='p-2 bg-black/30' src='/logo1.png'/> 
       
    </Avatar>
    )
}