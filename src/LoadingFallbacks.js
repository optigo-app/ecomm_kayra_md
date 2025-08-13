import { Box, CircularProgress } from "@mui/material";

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