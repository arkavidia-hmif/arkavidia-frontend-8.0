import FAQ from '@src/contexts/CompetitionDetail/FAQ'

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
    }
  ]

  return (
    <div className="flex flex-col items-center mt-32">
      <FAQ faqs={faqs} />
    </div>
  )
}
