import type { NextPage } from 'next'
import Head from 'next/head';
import { useCallback, useState } from 'react';
import {
  Card,
  CardContent,
  CardForm,
  CardHeader,
  List,
  ListItem
} from '../components/index';

import { GroceryList } from '@prisma/client';
import { trpc } from '@/utils/trpc';

const Home: NextPage = () => {
  const [itemName, setItemName] = useState<string>("");

  const { data: list, refetch } = trpc.useQuery(["list"]);
  const insertMutation = trpc.useMutation(["insert"], {
    onSuccess: () => refetch()
  });

  const deleteMutation = trpc.useMutation(["delete"], {
    onSuccess: () => refetch()
  })

  const updateMutation = trpc.useMutation(["edit"], {
    onSuccess: () => refetch()
  });

  const insertOne = useCallback(() => {
    if (itemName === "") return;

    insertMutation.mutate({
      title: itemName
    })
  }, [itemName, insertMutation]);

  const clearAll = useCallback(() => {
    if (list?.length) {
      deleteMutation.mutate({
        ids: list.map((item) => item.id),
      });
    }
  }, [list, deleteMutation]);

  const updateOne = useCallback(
    (item: GroceryList) => {
      updateMutation.mutate({
        ...item,
        checked: !item.checked,
      });
    },
    [updateMutation]
  );

  return (
    <>
      <Head>
        <title>Next + TRPC</title>
        <meta name="description" content="Next + TRPC Vizer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Card>
          <CardContent>
            <CardHeader title='Grocery List' listLength={list?.length ?? 0} clearAllFn={clearAll} />
            <List>
              {list?.map(item => (
                <ListItem key={item.id} item={item} onUpdate={updateOne}></ListItem>
              ))}
            </List>
          </CardContent>
          <CardForm value={itemName} onChange={e => setItemName(e.target.value)} submit={insertOne} />
        </Card>
      </main>
    </>
  )
}

export default Home
