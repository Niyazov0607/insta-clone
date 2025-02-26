import React, { useEffect, useState } from "react";
import logoInsta from "../../assets/Instagram_logo.svg.webp";
import { MdHomeFilled } from "react-icons/md";
import { CiSearch, CiHeart } from "react-icons/ci";
import { FaFacebookMessenger } from "react-icons/fa";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { FiMoreHorizontal } from "react-icons/fi";
import { IoIosStats } from "react-icons/io";
import { FaThreads } from "react-icons/fa6";
import interestImg from "../../assets/interest.png";
import reelsImg from "../../assets/instagram-reel.png";
import stayImg from "../../assets/stay.png";
import { getHomePosts } from "../../service/postService";
import { VITE_BASE_URL } from "../../config/envVariables";
import { FaRegComment } from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";

const recommendedUsers = [
    {
        id: 1,
        username: "k1ma_2.0",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        followers: "umbetovvv...",
    },
    {
        id: 2,
        username: "dilafruz_official_06",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        followers: "aman.aygab...",
    },
    {
        id: 3,
        username: "lluv__a.l.a",
        avatar: "https://randomuser.me/api/portraits/women/3.jpg",
        followers: "core.dav...",
    },
    {
        id: 4,
        username: "brollerbuxoro",
        avatar: "https://randomuser.me/api/portraits/men/4.jpg",
        followers: "sayfullaeevv...",
    },
    {
        id: 5,
        username: "iimyram",
        avatar: "https://randomuser.me/api/portraits/women/5.jpg",
        followers: "toshev__s...",
    },
];

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await getHomePosts();
            setPosts(data);
        })();
    }, []);

    return (
        <div className="flex justify-between">
            <div className="fixed top-0 bottom-0 left-0 w-64 h-screen p-4 text-white bg-black">
                <div className="mb-6">
                    <img width={120} src={logoInsta} alt="Instagram Logo" />
                </div>

                <div className="space-y-4">
                    <SidebarItem
                        icon={<MdHomeFilled size={24} />}
                        text="Home"
                        active
                    />
                    <SidebarItem icon={<CiSearch size={24} />} text="Search" />
                    <SidebarItem
                        icon={
                            <img
                                className="filter invert"
                                width={24}
                                src={interestImg}
                                alt="Explore"
                            />
                        }
                        text="Explore"
                    />
                    <SidebarItem
                        icon={
                            <img
                                className="filter invert"
                                width={24}
                                src={reelsImg}
                                alt="Reels"
                            />
                        }
                        text="Reels"
                    />
                    <SidebarItem
                        icon={<FaFacebookMessenger size={24} />}
                        text="Messages"
                    />
                    <SidebarItem
                        icon={<CiHeart size={24} />}
                        text="Notifications"
                    />
                    <SidebarItem
                        icon={<HiOutlinePlusCircle size={24} />}
                        text="Create"
                    />
                    <SidebarItem
                        icon={<IoIosStats size={24} />}
                        text="Dashboard"
                    />
                    <SidebarItem
                        icon={
                            <img
                                className="filter invert"
                                width={24}
                                src={stayImg}
                                alt="Profile"
                            />
                        }
                        text="Profile"
                    />
                    <SidebarItem
                        icon={<FaThreads size={24} />}
                        text="Threads"
                    />
                    <SidebarItem
                        icon={<FiMoreHorizontal size={24} />}
                        text="More"
                    />
                </div>
            </div>

            <div className="flex-1 h-screen p-4 overflow-y-auto ml-[450px]">
                {posts.map((post) => (
                    <div
                        key={post.id}
                        className="p-4 mb-6 bg-gray-900 rounded-lg w-[468px] h-auto shadow-md"
                    >
                        {post.mediaUrl && (
                            <img
                                className="w-full rounded-lg"
                                src={VITE_BASE_URL + post.mediaUrl}
                                alt="Post"
                            />
                        )}

                        <div className="flex mt-3 space-x-4 text-xl text-white">
                            <CiHeart className="cursor-pointer hover:text-red-500" />
                            <FaRegComment className="cursor-pointer hover:text-gray-400" />
                            <IoPaperPlaneOutline className="cursor-pointer hover:text-gray-400" />
                        </div>

                        {post.description && (
                            <p className="mt-2 text-white">
                                {post.description}
                            </p>
                        )}
                    </div>
                ))}
            </div>
            <div className="fixed top-0 right-0 h-screen p-4 text-white bg-black w-80">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                        <img
                            src="https://randomuser.me/api/portraits/men/10.jpg"
                            alt="Profile"
                            className="w-10 h-10 rounded-full"
                        />
                        <div>
                            <p className="font-semibold text-white">
                                thisisniyazov
                            </p>
                            <p className="text-sm text-gray-400">
                                Niyazov Shohjahon
                            </p>
                        </div>
                    </div>
                    <button className="text-sm font-semibold text-blue-500">
                        Switch
                    </button>
                </div>

                <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-sm font-semibold text-gray-400">
                            Recommended for you
                        </p>
                        <button className="text-sm text-white">See All</button>
                    </div>
                    {recommendedUsers.map((user) => (
                        <div
                            key={user.id}
                            className="flex items-center justify-between py-2"
                        >
                            <div className="flex items-center space-x-3">
                                <img
                                    src={user.avatar}
                                    alt={user.username}
                                    className="w-10 h-10 rounded-full"
                                />
                                <div>
                                    <p className="text-sm text-white">
                                        {user.username}
                                    </p>
                                    <p className="text-xs text-gray-400">
                                        Followed by {user.followers}
                                    </p>
                                </div>
                            </div>
                            <button className="text-sm font-semibold text-blue-500">
                                Follow
                            </button>
                        </div>
                    ))}
                </div>

                <div className="space-y-1 text-xs text-gray-500">
                    <p>Information • Help • Press • API • Careers</p>
                    <p>Privacy • Terms • Locations • Language</p>
                    <p>Meta Verified</p>
                    <p>© 2025 INSTAGRAM FROM META</p>
                </div>
            </div>
        </div>
    );
};

const SidebarItem = ({ icon, text, active }) => {
    return (
        <div
            className={`flex items-center space-x-3 text-lg cursor-pointer p-2 rounded-lg ${
                active ? "font-bold text-white" : "text-gray-400"
            }`}
        >
            {icon}
            <span>{text}</span>
        </div>
    );
};

export default Home;
