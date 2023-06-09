import { Card, Group, Text, useMantineTheme } from "@mantine/core";
import { useRouter } from "next/router";

interface IClassroomCardProps {
  id: string;
  name: string;
  numberOfStudents: number;
}

const ClassroomCard = ({ id, name, numberOfStudents }: IClassroomCardProps) => {
  const router = useRouter();

  const theme = useMantineTheme();
  return (
    <Card
      className="w-[70vw] max-w-[400px] cursor-pointer duration-100 ease-in hover:scale-[1.02]"
      withBorder
      onClick={() => {
        void router.push(`/teacher/classrooms/${id}`);
      }}
    >
      <Group>
        <Text className="text-xl font-bold" color={theme.primaryColor}>
          {name}
        </Text>
      </Group>

      <Text className="mt-2 font-semibold">
        Max number of students:{" "}
        <Text span inherit className="font-normal">
          {numberOfStudents}
        </Text>
      </Text>
    </Card>
  );
};

export default ClassroomCard;
