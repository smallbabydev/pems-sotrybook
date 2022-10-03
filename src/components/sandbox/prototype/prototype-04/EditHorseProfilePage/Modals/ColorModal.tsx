import { useState } from "react";
import Prototype04Button from "./../../global/Prototype04Button";
import Prototype04DrawerComponent from "../../global/Prototype04DrawerComponent";

import verifiedIcon from "../../assets/verified-icon.svg";
import colorIcon from "../../assets/color.svg";

const ButtonContainer: React.FC<{ children: any; className?: string }> = ({
    children,
    className,
}) => (
    <div className={`w-[80%] flex flex-col gap-3 p-4 mx-auto ${className}`}>
        {children}
    </div>
);

const SelectBox: React.FC<{
    icon: string;
    caption: string;
    id: number;
    selected: boolean;
    onClick: (caption: any) => void;
}> = ({ icon, caption, id, selected, onClick }) => (
    <div
        className={`p-4 mb-2 rounded-2xl border-[1px] border-solid flex items-center gap-4 text-[14px] text-[#122B4680] border-[#D3DAEE] cursor-pointer`}
        onClick={() => onClick({ id, caption })}
    >
        <div>
            <img src={icon} alt="icon" />
        </div>
        <div className="flex-1 whitespace-nowrap text-ellipsis overflow-hidden">
            {caption}
        </div>
        <div>{selected && <img src={verifiedIcon} alt="verified" />}</div>
    </div>
);

const ColorModal: React.FC<{
    show: boolean;
    onHide: () => void;
    onChange: (value: any) => void;
    value: any;
    multiple?: boolean;
    onHelp?: () => void;
}> = ({ show, onHide, onChange, value, multiple, onHelp }) => {
    const [selection, setSelection] = useState(value);

    const changeHandle = (value: any) => {
        if (multiple) {
            if (selection.some((item: any) => item.id === value.id)) {
                setSelection(
                    selection.filter((item: any) => item.id !== value.id)
                );
            } else {
                let temp = [...selection, value];
                setSelection(temp);
            }
        } else {
            setSelection([value]);
        }
    };

    const optionExistanceCheckHandle = (value: any) => {
        return selection.some((item: any) => item.id === value.id);
    };

    const saveHandle = () => {
        console.log(selection);
        onChange(selection);
        onHide();
    };

    const list = [
        {
            caption: "Appaloosa",
            id: 1,
        },
        {
            caption: "Bay",
            id: 2,
        },
        {
            caption: "Black",
            id: 3,
        },
        {
            caption: "Blue Duun",
            id: 4,
        },

        {
            caption: "Blue Roan",
            id: 5,
        },
        {
            caption: "Chestnut",
            id: 6,
        },
        {
            caption: "Cremello",
            id: 7,
        },
        {
            caption: "Dapple Grey",
            id: 8,
        },
        {
            caption: "Dun",
            id: 9,
        },
    ];

    return (
        <Prototype04DrawerComponent
            show={show}
            onHide={onHide}
            title="Coloring"
            onHelp={onHelp}
            maxWidth={640}
        >
            <div className="pr-2 overflow-auto">
                {list.map((item) => (
                    <SelectBox
                        icon={colorIcon}
                        caption={item.caption}
                        id={item.id}
                        onClick={changeHandle}
                        selected={optionExistanceCheckHandle(item)}
                    />
                ))}
            </div>
            <ButtonContainer className="mt-2">
                <Prototype04Button
                    caption="SAVE"
                    type={1}
                    onClick={saveHandle}
                />
                <Prototype04Button caption="CANCEL" type={3} onClick={onHide} />
            </ButtonContainer>
        </Prototype04DrawerComponent>
    );
};

export default ColorModal;
