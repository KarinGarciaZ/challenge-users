import { NextRequest, NextResponse } from 'next/server';
import { User, usersMock } from '@/mocks/users-mock';

interface Slug {
  params: {
    slug: string;
  }
}

/* NOTE: I used a Set data structure to search the friend in time complexity O(1),
         but this stills being a O(n) since mock users are stored in an array. Ideal
         would be to have users stored in a key-value database or table to access to
         the user's friends in O(1). Also a graphDB could work for this relly good.
*/
 
export function GET(request: NextRequest, { params }: Slug) {
  const user = usersMock.find(({ id }) => id === +params.slug);

  if (user) {
    const friendsIds = new Set([...user.friends]);
    const friends = usersMock.reduce((friends, { name, id, email }) => {
      if (friendsIds.has(id)) {
        friends.push({ name, id, email })
      }
      return friends;
    }, [] as Partial<User>[]);

    return NextResponse.json({data: { ...user, friends }, status: 'Success'}, { status: 200 });
  }

  return NextResponse.json({message: 'Not Found', status: 'Failed'}, { status: 404 });
}