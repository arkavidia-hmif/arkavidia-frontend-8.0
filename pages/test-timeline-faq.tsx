import FAQ from '@src/contexts/CompetitionDetail/FAQ'
import Timeline from '@src/contexts/CompetitionDetail/Timeline'

export default function TestPage() {
  const faqs: { title: string; content: string }[] = [
    {
      title: 'Bagaimana pengumpulannya?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec lectus elit. Phasellus elementum malesuada enim quis blandit. Nunc suscipit facilisis consectetur. In ante dolor, finibus id tortor volutpat, pulvinar porttitor sapien. Nunc sollicitudin gravida eros ut convallis. Phasellus in quam eu erat tincidunt aliquam. In dictum accumsan molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec lectus elit. Phasellus elementum malesuada enim quis blandit. Nunc suscipit facilisis consectetur. In ante dolor, finibus id tortor volutpat, pulvinar porttitor sapien. Nunc sollicitudin gravida eros ut convallis. Phasellus in quam eu erat tincidunt aliquam. In dictum accumsan molestie.'
    },
    {
      title: 'Bagaimana pelaksanaannya?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec lectus elit. Phasellus elementum malesuada enim quis blandit. Nunc suscipit facilisis consectetur. In ante dolor, finibus id tortor volutpat, pulvinar porttitor sapien. Nunc sollicitudin gravida eros ut convallis. Phasellus in quam eu erat tincidunt aliquam. In dictum accumsan molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec lectus elit. Phasellus elementum malesuada enim quis blandit. Nunc suscipit facilisis consectetur. In ante dolor, finibus id tortor volutpat, pulvinar porttitor sapien. Nunc sollicitudin gravida eros ut convallis. Phasellus in quam eu erat tincidunt aliquam. In dictum accumsan molestie.'
    },
    {
      title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu metus at diam ?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec lectus elit. Phasellus elementum malesuada enim quis blandit. Nunc suscipit facilisis consectetur. In ante dolor, finibus id tortor volutpat, pulvinar porttitor sapien. Nunc sollicitudin gravida eros ut convallis. Phasellus in quam eu erat tincidunt aliquam. In dictum accumsan molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec lectus elit. Phasellus elementum malesuada enim quis blandit. Nunc suscipit facilisis consectetur. In ante dolor, finibus id tortor volutpat, pulvinar porttitor sapien. Nunc sollicitudin gravida eros ut convallis. Phasellus in quam eu erat tincidunt aliquam. In dictum accumsan molestie.'
    },
    {
      title: 'Bagaimana pengumpulannya?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec lectus elit. Phasellus elementum malesuada enim quis blandit. Nunc suscipit facilisis consectetur. In ante dolor, finibus id tortor volutpat, pulvinar porttitor sapien. Nunc sollicitudin gravida eros ut convallis. Phasellus in quam eu erat tincidunt aliquam. In dictum accumsan molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec lectus elit. Phasellus elementum malesuada enim quis blandit. Nunc suscipit facilisis consectetur. In ante dolor, finibus id tortor volutpat, pulvinar porttitor sapien. Nunc sollicitudin gravida eros ut convallis. Phasellus in quam eu erat tincidunt aliquam. In dictum accumsan molestie.'
    },
    {
      title: 'Bagaimana pelaksanaannya?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec lectus elit. Phasellus elementum malesuada enim quis blandit. Nunc suscipit facilisis consectetur. In ante dolor, finibus id tortor volutpat, pulvinar porttitor sapien. Nunc sollicitudin gravida eros ut convallis. Phasellus in quam eu erat tincidunt aliquam. In dictum accumsan molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec lectus elit. Phasellus elementum malesuada enim quis blandit. Nunc suscipit facilisis consectetur. In ante dolor, finibus id tortor volutpat, pulvinar porttitor sapien. Nunc sollicitudin gravida eros ut convallis. Phasellus in quam eu erat tincidunt aliquam. In dictum accumsan molestie.'
    },
    {
      title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu metus at diam ?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec lectus elit. Phasellus elementum malesuada enim quis blandit. Nunc suscipit facilisis consectetur. In ante dolor, finibus id tortor volutpat, pulvinar porttitor sapien. Nunc sollicitudin gravida eros ut convallis. Phasellus in quam eu erat tincidunt aliquam. In dictum accumsan molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec lectus elit. Phasellus elementum malesuada enim quis blandit. Nunc suscipit facilisis consectetur. In ante dolor, finibus id tortor volutpat, pulvinar porttitor sapien. Nunc sollicitudin gravida eros ut convallis. Phasellus in quam eu erat tincidunt aliquam. In dictum accumsan molestie.'
    }
  ]

  const dates = [
    {
      title: 'Registration',
      startDate: new Date(2022, 10, 9),
      endDate: new Date(2022, 10, 15)
    },
    {
      title: 'Preliminary stage',
      startDate: new Date(2022, 10, 17),
      endDate: new Date(2022, 10, 19)
    },
    {
      title: 'Final stage',
      startDate: new Date(2022, 10, 20),
      endDate: new Date(2022, 10, 22)
    },
    {
      title: 'Registration',
      startDate: new Date(2022, 10, 24),
      endDate: new Date(2022, 10, 26)
    },
    {
      title: 'Preliminary stage',
      startDate: new Date(2022, 10, 26),
      endDate: new Date(2022, 10, 27)
    },
    {
      title: 'Final stage',
      startDate: new Date(2022, 11, 1),
      endDate: new Date(2022, 11, 15)
    }
  ]

  return (
    <div>
      <Timeline dates={dates} />
      <FAQ faqs={faqs} />
    </div>
  )
}
