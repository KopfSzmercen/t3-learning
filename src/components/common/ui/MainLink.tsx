import { Text, ThemeIcon, UnstyledButton } from "@mantine/core";

interface MainLinkProps {
  icon: React.ReactNode;
  color?: string;
  label: string;
}

function MainLink({ icon, color, label }: MainLinkProps) {
  return (
    <UnstyledButton
      sx={(theme) => ({
        display: "block",
        width: "100%",
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color:
          theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
        },
      })}
    >
      <div className="flex max-w-[110px] items-center justify-between">
        <Text size="sm">{label}</Text>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>
      </div>
    </UnstyledButton>
  );
}

export default MainLink;
