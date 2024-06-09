export interface SwitchContentProps {
    children: Array<JSX.Element>;
    value: string;
}

export const SwitchContent = ({ children, value }: SwitchContentProps): JSX.Element | null => {
    return children.find((child) => child.props["data-value"] === value) ?? null;
};
