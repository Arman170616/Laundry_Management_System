import { Button } from '@/components/ui/button';

export default function AdminServiceControls({
  addService,
  removeService,
}: {
  addService: () => void;
  removeService: (id: number) => void;
}) {
  return (
    <div className="mt-8">
      <Button onClick={addService} className="mr-4">
        Add New Service
      </Button>
      <Button onClick={() => removeService(1)} className="bg-red-500">
        Remove Service 1
      </Button>
    </div>
  );
}
