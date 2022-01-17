/*
 * @Description  : 容器框框
 * @Author       : ch1lam
 * @Date         : 2022-01-17 21:23:06
 * @LastEditTime : 2022-01-17 23:11:29
 * @LastEditors  : chilam
 * @FilePath     : \weather\src\layout\Container.tsx
 */

interface contianerProps {
  children: JSX.Element | JSX.Element[];
}

const Container = ({ children }: contianerProps) => {
  return (
    <div className="shadow-lg rounded-2xl w-96 p-4 relative overflow-hidden bg-indigo-800">
      {children}
    </div>
  );
};

export default Container;
