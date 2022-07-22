export interface BaseControls {
    id: any;
    value?: any;
    customClass?: string;
    name?: string;
    onChange?: (event: any) => void;
    children?: any;
    disabled?: boolean;
    title?: string;
    autofocus?: boolean;
    placeholder?: string;
}

export interface TextInputProps extends BaseControls {
    isRequired: boolean;
    clearText: () => void;
}

export type buttonVariant = 'primary' | 'secondary';

export interface IButtonProps extends BaseControls {
    label: string;
    variant: buttonVariant;
    onClick: (e: any) => void;
};

export interface DropdownProps extends BaseControls {
    options: string[];
    onChange: (data: any) => void;
    value: string | null | undefined;
    isRequired?: boolean;
}

export enum inputType {
    text = 'text',
}

export interface InputProps extends BaseControls {
    type: inputType;
    onClear?: (event: React.SyntheticEvent<SVGSVGElement>) => void;
    onChange?: (event: React.SyntheticEvent<HTMLElement>) => void;
    spellCheck?: boolean;
    placeholder?: string;
    autoComplete?: string;
}

export interface JsonViewerProps extends BaseControls {
    theme?: string;
    jsonObj?: any;
}

export interface XMLViewerProps extends BaseControls {
    theme?: string;
    xml?: string;
}

export enum ButtonVariant {
    Primary = 'btn-primary',
    Secondary = 'btn-secondary'
}

export interface ButtonProps extends BaseControls {
    variant: ButtonVariant;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    customeClass?: string;
    children: any;
}