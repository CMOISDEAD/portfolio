import { createContext, useContext, useState, ReactNode } from "react";

interface IntroContextType {
  hasSeenIntro: boolean;
  setHasSeenIntro: (value: boolean) => void;
  isAnimating: boolean;
  setIsAnimating: (value: boolean) => void;
}

const IntroContext = createContext<IntroContextType | undefined>(undefined);

interface IntroProviderProps {
  children: ReactNode;
}

export const IntroProvider = ({ children }: IntroProviderProps) => {
  const [hasSeenIntro, setHasSeenIntro] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(true);

  return (
    <IntroContext.Provider
      value={{
        hasSeenIntro,
        setHasSeenIntro,
        isAnimating,
        setIsAnimating,
      }}
    >
      {children}
    </IntroContext.Provider>
  );
};

export const UseIntro = (): IntroContextType => {
  const context = useContext(IntroContext);
  if (context === undefined) {
    throw new Error("useIntro must be used within an IntroProvider");
  }
  return context;
};
