import Link from 'next/link';
import { db } from '@/db';
import paths from '@/paths';

export default async function TopicList() {
  const topics = await db.topic.findMany();

  const renderedTopics = topics.map((topic) => {
    return (
      <div key={topic.id}>
        <Link href={paths.topicShow(topic.slug)}>
          <div className='p-1 bg-yellow-500 rounded'>
            {topic.slug}
          </div>
        </Link>
      </div>
    );
  });

  return <div className="flex flex-row flex-wrap gap-2">{renderedTopics}</div>;
}
