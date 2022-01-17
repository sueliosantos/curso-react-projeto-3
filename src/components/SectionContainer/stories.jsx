import { SectionContainer } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis illo adipisci voluptatibus atque
          consectetur perferendis perspiciatis quo. Voluptates aut delectus, ducimus unde saepe, veniam dolor at
          officiis dolore corrupti fuga.
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
