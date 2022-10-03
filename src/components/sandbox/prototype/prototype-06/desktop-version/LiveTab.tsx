import profilePic1 from "./../assets/product-image-1.png";
import profilePic2 from "./../assets/product-image-2.png";
import profilePic3 from "./../assets/product-image-3.png";

import closeIcon from "./../assets/close-icon-circle.svg";

import Prototype04Button from "../../prototype-04/global/Prototype04Button";

import plusIcon from "./../assets/plus-icon-color.svg";
import saveIcon from "./../assets/save-icon.svg";
import webIcon from "./../assets/web-icon.svg";
import { useState } from "react";
import DesktopFormBlock from "../components/DesktopFormBlock";

import ExpandableSelector from "./../components/ExpandableSelector";
import statusIcon from "./../assets/status-icon.svg";
import Prototype04Input from "./../../prototype-04/global/Prototype04Input";
import sampleImage from "./../assets/product-image-1.png";
import AddEditProductModal from "./Modals/AddEditProductModal";
import tagIcon from "./../assets/tag-icon.svg";
import percentIcon from "./../assets/percent-icon-big.svg";

const UserCard: React.FC<{
    profile: string;
    caption: string;
    onClick?: () => void;
}> = ({ profile, caption, onClick }) => (
    <div
        onClick={onClick}
        className="cursor-pointer flex flex-1 gap-2 items-center px-4 min-w-[300px] h-[56px] rounded-xl border-[1px] border-solid text-[14px] text-[#122B46] border-[#D3DAEE]"
    >
        <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
                src={profile}
                alt="profile"
                className="object-cover w-full h-full"
            />
        </div>
        <div className="text-ellipsis overflow-hidden whitespace-nowrap">
            {caption}
        </div>
    </div>
);

const TeamMemberRow: React.FC<{
    profile: string;
    caption: string;
    url: string;
    price: string;
    coupon: string;
    onDelete?: () => void;
    onEdit?: () => void;
}> = ({ profile, caption, url, price, coupon, onDelete, onEdit }) => {
    const [role, setRole] = useState("1");
    const [status, setStatus] = useState("1");
    const [active, setActive] = useState(false);
    const selectorHandle = (value: string, key: string) => {
        if (key === "role") {
            setRole(value);
        } else {
            setStatus(value);
        }
    };
    return (
        <div
            className={`flex-1 grid grid-cols-[1fr_150px_150px_1fr_200px_32px] gap-2 items-start relative h-[56px] z-10 ${
                active ? "!z-20" : ""
            }`}
        >
            <UserCard caption={caption} profile={profile} onClick={onEdit} />

            <Prototype04Input
                type="text"
                value={price}
                placeholder="Price"
                icon={tagIcon}
            />
            <Prototype04Input
                type="text"
                value={coupon}
                placeholder="Coupon"
                icon={percentIcon}
            />
            <Prototype04Input
                type="text"
                value={url}
                placeholder="URL"
                icon={webIcon}
            />
            <ExpandableSelector
                options={[
                    { caption: "Live", value: "1" },
                    { caption: "Draft", value: "2" },
                ]}
                onChange={(value) => selectorHandle(value, "type")}
                placeholder="Status..."
                icon={statusIcon}
                value={status}
                onOpen={() => setActive(true)}
                onClose={() => setActive(false)}
                hasBackdrop={true}
            />

            {onDelete && (
                <button className="mt-4 min-w-[32px]">
                    <img
                        src={closeIcon}
                        alt="close"
                        className="grayscale opacity-70"
                    />
                </button>
            )}
        </div>
    );
};

interface dataType {
    status: string;
    title: string;
    description: string;
    url: string;
    productImages: [{ id: number; image: string }] | [];
    category: string;
    tags: string;
    price: string;
    coupon: string;
}

const LiveTab: React.FC = () => {
    const [addEditNewsModalShow, setAddEditNewsModalShow] = useState(false);
    const [addEditNewsModalData, setAddEditNewsModalData] =
        useState<dataType | undefined>(undefined);
    const launchEditModal = () => {
        setAddEditNewsModalData({
            status: "1",
            title: "Beth Cross signing at Ariat tent today!",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            url: "https://ariat.com/apparel/casual-dual/...",
            productImages: [{ id: 1, image: sampleImage }],
            category: "Apparel",
            tags: "Shirt, Undershirt",
            price: "$125",
            coupon: "RRR",
        });
        setAddEditNewsModalShow(true);
    };
    const launchAddModal = () => {
        setAddEditNewsModalData(undefined);
        setAddEditNewsModalShow(true);
    };
    return (
        <>
            <AddEditProductModal
                show={addEditNewsModalShow}
                onHide={() => setAddEditNewsModalShow(false)}
                data={addEditNewsModalData}
            />
            <div className="flex flex-col divide-y mt-4">
                <div className="pb-8">
                    <h1 className="text-[20px] font-bold m-0">Live Products</h1>
                    <p className="text-[#122B4680] mt-2">
                        These product are visible to the public
                    </p>
                </div>
                <div className="py-5">
                    <DesktopFormBlock
                        caption="Product 1"
                        icon={tagIcon}
                        className="!overflow-visible"
                    >
                        <TeamMemberRow
                            caption="Casual dual tone shirt"
                            url="https://ariat.com/news/page-1/"
                            price="$1400"
                            coupon="N/A"
                            profile={profilePic1}
                            onDelete={() => {}}
                            onEdit={launchEditModal}
                        />
                    </DesktopFormBlock>
                    <DesktopFormBlock
                        caption="Product 2"
                        icon={tagIcon}
                        className="!overflow-visible"
                    >
                        <TeamMemberRow
                            caption="Show Helmet, Safe for Children"
                            url="https://ariat.com/news/page-1/"
                            price="$250"
                            coupon="SAVE15"
                            profile={profilePic2}
                            onDelete={() => {}}
                            onEdit={launchEditModal}
                        />
                    </DesktopFormBlock>
                    <DesktopFormBlock
                        caption="Product 3"
                        icon={tagIcon}
                        className="!overflow-visible"
                    >
                        <TeamMemberRow
                            caption="Tarten Riding Gloves"
                            url="https://ariat.com/news/page-1/"
                            price="$95"
                            coupon="SHOW365"
                            profile={profilePic3}
                            onDelete={() => {}}
                            onEdit={launchEditModal}
                        />
                    </DesktopFormBlock>
                    <button
                        onClick={launchAddModal}
                        className="flex gap-2 items-center text-[#F7074F] text-[12px]"
                    >
                        <span>
                            <img src={plusIcon} alt="icon" />
                        </span>
                        <span>Add Product</span>
                    </button>
                </div>

                <div className="py-5">
                    <DesktopFormBlock
                        caption="Save all updates"
                        icon={saveIcon}
                    >
                        <Prototype04Button
                            caption="Save"
                            type={2}
                            className="w-auto px-12"
                        />
                    </DesktopFormBlock>
                </div>
            </div>
        </>
    );
};

export default LiveTab;
