'use client';

import { AccessoryList } from '@/components/dashboard/accessories/accessory-list';
import { CreateAccessoryDialog } from '@/components/dashboard/accessories/create-accessory-dialog';
import { Button } from '@/components/ui/button';
import { useQuery } from '@tanstack/react-query';
import { PlusIcon } from 'lucide-react';
import { useState } from 'react';

export default function AccessoriesPage() {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const { data: accessories, refetch } = useQuery({
    queryKey: ['accessories'],
    queryFn: () => fetch('/api/accessories').then((res) => res.json()),
  });

  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl font-bold'>Accessories</h1>
        <Button onClick={() => setIsCreateDialogOpen(true)}>
          <PlusIcon className='h-4 w-4 mr-2' />
          Add Accessory
        </Button>
      </div>

      <AccessoryList
        accessories={accessories || []}
        onAccessoryUpdated={() => refetch()}
      />

      <CreateAccessoryDialog
        open={isCreateDialogOpen}
        onOpenChange={setIsCreateDialogOpen}
        onAccessoryCreated={() => {
          refetch();
          setIsCreateDialogOpen(false);
        }}
      />
    </div>
  );
}
