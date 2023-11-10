import {
    Card,
    Checkbox,
    Button,
    Typography,
    Spinner,
} from "@material-tailwind/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputStyle1 from "../inputStyle1/InputStyle1";
import { TermsAndConditons } from "../termsAndConditions/TermsAndConditions";

interface RegisterInfoType {
    username: string
    email: string
    captcha: string
    password: string
    agreeTerms: boolean
}

export function SimpleRegistrationForm() {

    const navigate = useNavigate();

    const onButtonClick = () => {
        navigate('/login');
    }

    const [registerInfo, setRegisterInfo] = useState<RegisterInfoType>({ username: "", email: "", captcha: "", password: "", agreeTerms: false })

    //更新用户名
    const updateUsername = (e: any) => {
        setRegisterInfo({ ...registerInfo, username: e.target.value })
    }

    //更新邮箱
    const updateEmail = (e: any) => {
        setRegisterInfo({ ...registerInfo, email: e.target.value })
    }

    //更新密码
    const updatePassword = (e: any) => {
        setRegisterInfo({ ...registerInfo, password: e.target.value })
    }

    //更新验证码
    const updateCaptcha = (e: any) => {
        setRegisterInfo({ ...registerInfo, captcha: e.target.value })
    }

    //更新是否同意条款
    const [agreeTerms, setAgreeTerms] = useState(false);
    const updateAgreeTerms = () => {
        setRegisterInfo({ ...registerInfo, agreeTerms: !agreeTerms })
        setAgreeTerms(!agreeTerms)
    }

    //发送邮箱验证码
    //1.模拟服务器请求延迟
    function takeLongTime() {
        return new Promise((resolve, reject) => {
            console.log('开始睡眠')
            setTimeout(() => {
                console.log("睡眠结束")
                resolve(true)
            }, 3000)
        })
    }

    //2.发送验证码按钮状态state
    const [captchaState, setCaptchaState] = useState('cansend')
    const [seconds, setSeconds] = useState(11)

    async function sendCaptcha() {
        setCaptchaState('sending')
        console.log(`开始向${registerInfo?.email}发送邮件...`)
        const success = await takeLongTime();
        console.log(`向${registerInfo?.email}发送邮件${success}`)
        setCaptchaState('sendingSuccess')
        let i = seconds;
        let n = setInterval(() => {
            console.log('hello world') 
            i --
            setSeconds(i)
            if (i === 0) {
                setCaptchaState('cansend')
                clearInterval(n)
                setSeconds(11)
            } 
         }, 1000);

    }

    //注册
    async function register() {
        if (registerInfo.email.length === 0) {
            alert("邮箱不存在");
            return;
        }
        console.log(registerInfo)
        const success = await takeLongTime()
        console.log({success})
        navigate('/register_success')
        const xx = await takeLongTime()
        console.log(xx)
        navigate('/login')
    }


    return (
        <Card className="w-96 mx-auto mt-40 px-2">
            <div className="mt-10 bg-orange-400 w-4/5 h-24 pt-7 align-middle rounded-lg text-center mx-auto text-white text-3xl">
                Sign Up
            </div>

            <form className="mt-8 mb-2 w-4/5 max-w-screen-lg mx-auto">
                <div className="mb-4 flex flex-col gap-6">
                    <InputStyle1 inputHandle={updateUsername} label={'用户名'} isPassword={false}></InputStyle1>
                    <InputStyle1 inputHandle={updateEmail} label={'邮箱'} isPassword={false}></InputStyle1>

                    <div className="relative flex w-full max-w-[24rem]">
                        <InputStyle1 inputHandle={updateCaptcha} label={'验证码'} isPassword={false}></InputStyle1>

                        <Button
                            size="sm"
                            color={"orange"}
                            className="!absolute right-1 top-1 rounded"
                            onClick={() => sendCaptcha()}
                            
                        >
                            <div style={{
                                display: captchaState === 'cansend' ? "block" : "none" //行内式css写法
                              }}>发送验证码</div>
                            <Spinner color="orange" style={{
                                display: captchaState === 'sending' ? "block" : "none" //行内式css写法
                              }} className='h-4 w-4'></Spinner>
                              <div style={{
                                display: captchaState === 'sendingSuccess' ? "block" : "none" //行内式css写法
                              }} className='h-4 w-4'>
                                {seconds}
                              </div>
                        </Button>
                    </div>
                    <InputStyle1 inputHandle={updatePassword} label={'密码'} isPassword={true}></InputStyle1>

                </div>
                <div className="flex">
                    <Checkbox
                        label={<Typography
                            variant="small"
                            color="gray"
                            className="flex items-center font-normal"
                        >
                            I agree the
                        </Typography>}
                        containerProps={{ className: "-ml-2.5" }} crossOrigin={undefined} onClick={() => updateAgreeTerms()} />
                    <TermsAndConditons></TermsAndConditons></div>

                <Button className="mt-6 bg-orange-400" fullWidth onClick={() => register()}>
                    Register
                </Button>
                <Typography variant="small" className="mt-6 flex justify-center">
                    Already have an account?
                    <Typography
                        as="a"
                        href="#signup"
                        variant="small"
                        color="blue-gray"
                        className="ml-1 font-bold"
                        onClick={onButtonClick}
                    >
                        Sign In
                    </Typography>
                </Typography>
            </form>
        </Card>
    );
}