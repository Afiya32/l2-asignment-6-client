import React from 'react';
const RegisterLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
     <main>
        {children}
     </main>
    </div>
  );
};

export default RegisterLayout;