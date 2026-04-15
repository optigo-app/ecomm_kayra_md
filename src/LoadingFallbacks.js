import { Box, CircularProgress } from "@mui/material";
import { useRecoilValue } from "recoil";
import { IsCurrentTheme } from "./AllTheme/SmilingRock/Components/Recoil/atom";

// 0
export const LoadingFallback = () => (
    <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh'
        }}
    >
        <CircularProgress sx={{ color: 'rgba(255, 87, 34, 0.8)' }} />
    </Box>
)
//  1
export const MdLoadingFallback = () => (
    <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: '#fff',
        }}
    >
        <img
            src="/mdLogo.png"
            alt="Loading..."
            height="100%"
            width="auto"
            loading="lazy"
            draggable={true}
            onContextMenu={(e) => e.preventDefault()}
        />
    </Box>
);
// 2
export const KayraLoadingFallback = () => (
    <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: '#fff',
        }}
    >
        <img
            src="/kayraLogo.png"
            alt="Loading..."
            height="100%"
            width="auto"
            loading="lazy"
            draggable={true}
            onContextMenu={(e) => e.preventDefault()}
        />
    </Box>
);
// 3
export const DfineLoadingFallback = () => (
    <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: '#fff',
        }}
    >
        <img
            src="/dfinelogo.png"
            alt="Loading..."
            height="100%"
            width="auto"
            loading="lazy"
            draggable={true}
            onContextMenu={(e) => e.preventDefault()}
        />
    </Box>
);

export default function FallBackLoaderDefaultConfig() {
    const IsCurrentThemeState = useRecoilValue(IsCurrentTheme);
    switch (IsCurrentThemeState) {
        case "1":
            return <MdLoadingFallback />;

        case "2":
            return <KayraLoadingFallback />;

        case "3":
            return <DfineLoadingFallback />;

        default:
            return <LoadingFallback />;
    }
}