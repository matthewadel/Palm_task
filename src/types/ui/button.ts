import type { ButtonProps as TamaguiButtonProps } from 'tamagui';

export interface IButtonProps extends TamaguiButtonProps {
  type?: 'PRIMARY' | 'SECONDARY';
}
