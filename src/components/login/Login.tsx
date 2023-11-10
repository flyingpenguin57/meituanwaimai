import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
  } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

  export function LoginCard() {

    const navigate = useNavigate();

    const onButtonClick = () => {
      navigate('/signup');
    }

    return (
      <Card className="w-96 mx-auto mt-40">
        <CardHeader
          variant="gradient"
          className="mb-4 grid h-28 place-items-center bg-orange-400"
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input label="Email" size="lg" crossOrigin={undefined} />
          <Input label="Password" size="lg" crossOrigin={undefined} />
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" crossOrigin={undefined} />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" color="orange" fullWidth className="bg-orange-400">
            Sign In
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Don&apos;t have an account?
            <Typography
              as="a"
              href="#signup"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold"
              onClick={onButtonClick}
            >
              Sign up
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    );
  }