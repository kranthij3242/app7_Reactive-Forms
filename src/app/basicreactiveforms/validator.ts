import {AbstractControl} from '@angular/forms';//AbstarctControl is used to get the formcontrol of that formelement
import { isError } from 'util';
export function zipvalidator(control:AbstractControl){
//console.log(control);
if(control && control.value!==null && control.value!==undefined){

    const regex=new RegExp('^[0-9]{6}$');
    if(!regex.test(control.value)){
        return {isError:true};
    }

}
return null;
}

export function passvalidator(control:AbstractControl){
    if(control && control.value!==null && control.value!==undefined){
        const confpassvalue = control.value;
        const password = control.root.get('password');

        if(password){
            const pwdvalue=password.value;
            if(pwdvalue!==confpassvalue || pwdvalue==''){
                return{
                    isError:true
                }
            }
        }

    }
    return null;
}