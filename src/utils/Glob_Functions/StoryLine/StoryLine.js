import React from 'react';
import Stories from 'react-insta-stories';
import './StoryLine.scss';

const ReactStoriesConfig = {
    storyInnerContainerStyles: {
        backgroundColor: "#fff",
        filter: 'none'
    },
    progressWrapperStyles: {
        height: "3px",
        borderRadius: "15px",
        backgroundColor: "#8f8f8f69",
        boxShadow: "none", // Remove any shadow
        filter: 'none'
    },
    progressStyles: {
        height: "3px",
        borderRadius: "15px",
        backgroundColor: "#ffffff",
        boxShadow: "none", // Remove any shadow
        filter: 'none'
    },
    defaultInterval: 1600,
    width: "100%",
    height: "100%",
    loop: true,
};

const getStoryContent = (isStory, selectedProduct) => {
    if (!selectedProduct) {
        console.error("Selected product is undefined or null");
        return [];
    }

    let storyContent = [];

    const images = selectedProduct?.images || [];
    const videos = selectedProduct?.videos || [];

    switch (isStory) {
        case 1:
            storyContent = images?.length > 0 ? images?.slice(0, 1).map((url) => ({ url, preloadResource: true })) : [];
            break;
        case 2:
            storyContent = videos?.length > 0 ? videos?.map((url) => ({ url, type: 'video', muted: true, preloadResource: true })) : [];
            break;
        case 3:
            storyContent = images?.length > 0 ? images?.map((url) => ({ url, duration: 1500, preloadResource: true })) : [];
            break;
        case 4:
            storyContent = [
                ...images?.map((url) => ({ url, duration: 1500, preloadResource: true })),
                ...videos?.map((url) => ({ url, type: 'video', duration: 5000, muted: true, preloadResource: true }))
            ];
            break;
        case 5:
            if (videos.length > 0) {
                storyContent = [{ url: videos?.[0], type: 'video', duration: 5000, muted: true, preloadResource: true }];
            } else if (images.length > 0) {
                storyContent = [{ url: images?.[0], duration: 1500, preloadResource: true }];
            }
            break;
        default:
            return [];
    }

    return storyContent;
};

const StoryLine = ({ resetKey, selectedProduct, storeInit  }) => {
    const isStory = storeInit?.RollOverNo;
    const storyContent = selectedProduct ? getStoryContent(isStory || 1, selectedProduct) : [];
    if (!selectedProduct || storyContent.length === 0) {
        return null;
    }
    if (isStory == 0) {
        return null;
    }

    return (
        <div
            key={resetKey}
            className="story-diamond"
            style={{
                position: "absolute",
                top: "0",
                bottom: "0",
                overflow: "hidden",
                zIndex: "99999999",
                height: "100%",
                width: "100%",
            }}
        >
            <Stories
                key={resetKey}
                {...ReactStoriesConfig}
                stories={storyContent}
                loop={true}
                progressContainerStyles={storyContent?.length < 2 ? { display: "none" } : {}}
            />
        </div>
    );
}

export default StoryLine;
