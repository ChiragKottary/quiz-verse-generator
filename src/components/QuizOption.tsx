
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
      return isSelected ? "bg-primary/20" : "bg-white";
    }
    
    if (isCorrect) {
      return "bg-green-100";
    } else if (isSelected) {
      return "bg-red-100";
    }
    return "bg-white";
  };

  const getBorderColor = () => {
    if (!isRevealed) {
      return isSelected ? "border-primary" : "border-gray-200";
    }
    
    if (isCorrect) {
      return "border-green-500";
    } else if (isSelected) {
      return "border-red-500";
    }
    return "border-gray-200";
  };
  
  return (
    <div
      className={cn(
        "option-transition p-4 rounded-xl border-2 cursor-pointer mb-3 relative",
        getBgColor(),
        getBorderColor(),
        {
          "ring-2 ring-primary ring-offset-1": isSelected && !isRevealed,
          "opacity-80": disabled && !isSelected && !isRevealed,
          "cursor-not-allowed": disabled
        }
      )}
      onClick={() => !disabled && onSelect()}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="flex justify-between items-center">
        <span className="text-lg">{option.text}</span>
        {isRevealed && (
          <div className={cn(
            "flex items-center justify-center w-6 h-6 rounded-full",
            isCorrect ? "bg-green-500 text-white" : isSelected ? "bg-red-500 text-white" : "hidden"
          )}>
            {isCorrect ? <Check size={16} /> : <X size={16} />}
          </div>
        )}
      </div>
      
      {isHovering && !disabled && !isRevealed && (
        <div className="absolute inset-0 bg-primary/5 rounded-xl"></div>
      )}
    </div>
  );
};

export default QuizOption;
