import { useState } from "react";
import { QuizOption as QuizOptionType } from "../models/QuizTypes";
import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";

interface QuizOptionProps {
  option: QuizOptionType;
  isSelected: boolean;
  isCorrect?: boolean;
  isRevealed: boolean;
  onSelect: () => void;
  disabled: boolean;
}

const QuizOption = ({
  option,
  isSelected,
  isCorrect,
  isRevealed,
  onSelect,
  disabled,
}: QuizOptionProps) => {
  const [isHovering, setIsHovering] = useState(false);

  const getBgColor = () => {
    if (!isRevealed) {
      return isSelected ? "bg-primary/10" : "bg-card";
    }
    
    if (isCorrect) {
      return "bg-green-50";
    } else if (isSelected) {
      return "bg-red-50";
    }
    return "bg-card hover:bg-card";
  };

  const getBorderColor = () => {
    if (!isRevealed) {
      return isSelected ? "border-primary" : "border-input hover:border-primary/50";
    }
    
    if (isCorrect) {
      return "border-green-500";
    } else if (isSelected) {
      return "border-red-500";
    }
    return "border-input";
  };
  
  return (
    <button
      type="button"
      role="radio"
      aria-checked={isSelected}
      disabled={disabled}
      className={cn(
        "option-transition w-full text-left p-4 rounded-lg border-2",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        getBgColor(),
        getBorderColor(),
        {
          "cursor-pointer": !disabled,
          "cursor-not-allowed opacity-60": disabled && !isSelected && !isRevealed,
        }
      )}
      onClick={() => !disabled && onSelect()}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="flex justify-between items-center gap-4">
        <span className="text-base flex-1">{option.text}</span>
        {isRevealed && (
          <span className={cn(
            "flex items-center justify-center w-6 h-6 rounded-full text-white shrink-0",
            isCorrect ? "bg-green-500" : isSelected ? "bg-red-500" : "hidden"
          )}>
            {isCorrect ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
          </span>
        )}
      </div>
      
      {isHovering && !disabled && !isRevealed && (
        <div className="absolute inset-0 rounded-lg bg-primary/5 pointer-events-none" />
      )}
    </button>
  );
};

export default QuizOption;
