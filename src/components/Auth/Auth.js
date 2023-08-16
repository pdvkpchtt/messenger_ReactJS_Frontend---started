import { useState } from "react";
import { LayoutGroup, motion, AnimatePresence } from "framer-motion";

import TextHead from "../../shared/Text/TextHead";
import CustomButton from "../../shared/ui/CustomButton";
import CustomInput from "../../shared/ui/CustomInput";
import TextError from "../../shared/Text/TextError";

const Auth = () => {
  const [loginState, setLoginState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const [invalid, setInvalid] = useState(false);

  return (
    <AnimatePresence>
      <LayoutGroup>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          layout
          className="flex flex-col my-auto items-center gap-[16px] bg-[#222222] rounded-[35px] w-full [@media(hover)]:max-w-[500px] p-[16px] border-y-[20px] border-[#604ae6]"
        >
          <CustomInput
            value={loginState}
            onChange={(value) => setLoginState(value)}
            head="Enter username:"
            placeholder="Username"
            maxLength={10}
          />
          <CustomInput
            value={passwordState}
            onChange={(value) => setPasswordState(value)}
            head="Enter password:"
            placeholder="Password"
            password
            maxLength={10}
          />
          {invalid ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <TextError text="Invalid login or password" />
            </motion.div>
          ) : null}

          <CustomButton text="Create account" />
          <TextHead text="Already have an account?" />
          <CustomButton
            text="LogIn"
            onPress={() => {
              setInvalid(!invalid);
            }}
          />
        </motion.div>
      </LayoutGroup>
    </AnimatePresence>
  );
};

export default Auth;