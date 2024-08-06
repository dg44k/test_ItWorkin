import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Typography } from "@mui/material";

const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 30,
  borderRadius: 38,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#22001B",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 51,
    background: "linear-gradient(45deg, #FF6E05, #F83C27)",
  },
}));

interface ProgressBarProps {
  value: number;
	valuePercent: number;
}

export default function ProgressBar({ value = 0, valuePercent = 0 }: ProgressBarProps) {
  return (
    <Stack position="relative" width={120} height={30}>
      <BorderLinearProgress variant="determinate" value={valuePercent} />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography color="white" sx={{ fontSize: "1rem" }}>
          {`${value}`}
        </Typography>
      </div>
    </Stack>
  );
}
