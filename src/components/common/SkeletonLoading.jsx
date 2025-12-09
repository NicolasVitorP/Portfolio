
import React from 'react';
import { Skeleton } from 'antd';

const SkeletonLoading = () => {
    return (
        <div className="py-20 px-4 max-w-7xl mx-auto">
            <div className="flex flex-col gap-8">
                <Skeleton.Input active size="large" block className="h-12 w-1/3 mb-4" />
                <Skeleton active paragraph={{ rows: 4 }} />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Skeleton.Image active className="w-full h-48" />
                    <Skeleton.Image active className="w-full h-48" />
                    <Skeleton.Image active className="w-full h-48" />
                </div>
            </div>
        </div>
    );
};

export default SkeletonLoading;
