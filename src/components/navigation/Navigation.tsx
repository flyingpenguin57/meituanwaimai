import React from "react";
import {
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import {
    UserCircleIcon,
    ShoppingCartIcon,
    BuildingStorefrontIcon,
    ChatBubbleOvalLeftEllipsisIcon,
    ClipboardDocumentListIcon,
    RocketLaunchIcon,
    Cog8ToothIcon,
    UserIcon
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Nav() {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value: any) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <div className="w-48 p-1 sticky top-20 border-2 border-orange-500">

            <List>
                <ListItem className="w-40">
                    <ListItemPrefix>
                        <BuildingStorefrontIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    点餐
                    <ListItemSuffix>
                    </ListItemSuffix>
                </ListItem>

                <hr className="my-1 border-blue-gray-50 w-40" />

                <ListItem className="w-40">
                    <ListItemPrefix>
                        <ClipboardDocumentListIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    订单
                </ListItem>

                <hr className="my-1 border-blue-gray-50 w-40" />


                <ListItem className="w-40">
                    <ListItemPrefix>
                        <RocketLaunchIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    会员
                </ListItem>

                <hr className="my-1 border-blue-gray-50 w-40" />


                <ListItem className="w-40">
                    <ListItemPrefix>
                        <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    消息
                    <ListItemSuffix>
                        <Chip value="2" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                    </ListItemSuffix>
                </ListItem>

                <hr className="my-1 border-blue-gray-50 w-40" />


                <ListItem className="w-40">
                    <ListItemPrefix>
                        <ShoppingCartIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    购物车
                    <ListItemSuffix>
                        <Chip value="2" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                    </ListItemSuffix>
                </ListItem>

                <hr className="my-1 border-blue-gray-50 w-40" />


                <Accordion className="w-40"
                    open={open === 1}
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
                        />
                    }
                >
                    <ListItem className="p-0" selected={open === 1}>
                        <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                            <ListItemPrefix>
                                <UserCircleIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            <Typography color="blue-gray" className="mr-auto font-normal">
                                个人中心
                            </Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                        <List className="p-0 text-xs pl-2">
                            <ListItem>
                                <ListItemPrefix>
                                    <UserIcon className="h-4 w-4" />
                                </ListItemPrefix>
                                个人信息
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <Cog8ToothIcon className="h-4 w-4" />
                                </ListItemPrefix>
                                设置
                            </ListItem>
                        </List>
                    </AccordionBody>
                </Accordion>




            </List>
        </div>
    );
}