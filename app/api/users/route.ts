import { NextRequest, NextResponse } from 'next/server';
import { usersMock } from '@/mocks/users-mock';
 
// GET endpoint to recieve basic data of all users.
/* Note: In this scenario I am importing all users from mock,
it'd ideal to use a database and only query the limit and offset we are looking for. */
export function GET(request: NextRequest) {
  const limit = request.nextUrl.searchParams.get('limit');
  const offset = request.nextUrl.searchParams.get('offset');
  if (!limit || !offset) {
    return NextResponse.json({message: 'Bad Request', status: 'Failed', total: usersMock.length}, { status: 400 });
  }

  const usersPage = usersMock.slice(+offset, +limit + +offset);
  const mainUserData = usersPage.map(({ id, name, email }) => ({ id, name, email }));
  return NextResponse.json({data: mainUserData, status: 'Success'}, { status: 200 });
}